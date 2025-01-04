import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { mockUserData } from '../app/lib/data'
import Account from '../app/account/page'
import { UserContext } from '../app/context/UserContext'
import '@testing-library/jest-dom'
import { ReactNode } from 'react'


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
        pathname: '/',
    })),
    usePathname: jest.fn(() => '/account'),
}))

describe('Account Page', () => {
    const renderAccountPage = (user = mockUserData) => {
        return render(
            <UserContext.Provider value={{ user }}>
                <Account />
            </UserContext.Provider>
        )
    }

    it('renders user profile information correctly', () => {
        renderAccountPage()

        expect(screen.getByText(mockUserData.name)).toBeInTheDocument()
        expect(screen.getByText(`Account ID: #${mockUserData.id}`)).toBeInTheDocument()
        expect(screen.getByText(mockUserData.accountType)).toBeInTheDocument()
        expect(screen.getByText(`KYC ${mockUserData.kycStatus}`)).toBeInTheDocument()
    })

    it('handles tab switching correctly', async () => {
        renderAccountPage()

        // Check if Personal Info tab is active by default
        expect(screen.getByText('Personal Info')).toHaveClass('hidden sm:inline')

        // Switch to Security tab
        const securityTab = screen.getByText('Security')
        fireEvent.click(securityTab)
        expect(await screen.findByText('Two-Factor Authentication')).toBeInTheDocument()

        // Switch to Notifications tab
        const notificationsTab = screen.getByText('Notifications')
        fireEvent.click(notificationsTab)
        expect(await screen.findByText('email Notifications')).toBeInTheDocument()

        // Switch to Payment Methods tab
        const paymentTab = screen.getByText('Payment Methods')
        fireEvent.click(paymentTab)
        expect(await screen.findByText('Add Payment Method')).toBeInTheDocument()
    })

    describe('Personal Info Tab', () => {
        it('enables editing mode correctly', () => {
            renderAccountPage()

            // Check if inputs are disabled by default
            const nameInput = screen.getByDisplayValue(mockUserData.name)
            expect(nameInput).toBeDisabled()

            // Enable editing mode
            const editButton = screen.getByText('Edit Profile')
            fireEvent.click(editButton)

            // Check if inputs are enabled
            expect(nameInput).not.toBeDisabled()
        })


        it('handles cancel editing correctly', () => {
            renderAccountPage()

            // Enable editing mode
            fireEvent.click(screen.getByText('Edit Profile'))

            // Cancel editing
            fireEvent.click(screen.getByText('Cancel'))

            // Check if inputs are disabled again
            const nameInput = screen.getByDisplayValue(mockUserData.name)
            expect(nameInput).toBeDisabled()
        })
    })

    describe('Security Tab', () => {
        it('displays 2FA status correctly', () => {
            renderAccountPage()

            // Switch to Security tab
            fireEvent.click(screen.getByText('Security'))
        })
    })

    describe('Notifications Tab', () => {
        it('displays notification preferences correctly', () => {
            renderAccountPage()

            // Switch to Notifications tab
            fireEvent.click(screen.getByText('Notifications'))


        })
    })

    describe('Payment Methods Tab', () => {
        it('displays payment methods correctly', () => {
            renderAccountPage()

            // Switch to Payment Methods tab
            fireEvent.click(screen.getByText('Payment Methods'))

            // Check if example card is displayed
            expect(screen.getByText(/4242/)).toBeInTheDocument()
            expect(screen.getByText('Expires 12/24')).toBeInTheDocument()
        })
    })
})