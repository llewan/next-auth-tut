import CredentialsProvider from "next-auth/providers/credentials";

export default CredentialsProvider({
    name: 'Credentials',
    credentials: {
        username: {
            label: 'Username',
            type: 'text',
            placeholder: 'your-cool-username'
        },
        password: {
            label: 'Password',
            type: 'password',
            placeholder: 'your-awesome-password'
        }
    },
    async authorize(credentials) {
        const user = { id: 42, name: 'Leo', password: 'nextauth' }
        return user
    }
})
