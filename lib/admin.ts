import { auth } from '@clerk/nextjs'

const adminIds = ['user_2kjUpdfk9e1aytWmFf2n4ozKXGf']

export const isAdmin = () => {
	const { userId } = auth()

	if (!userId) return false

	return adminIds.indexOf(userId) !== -1
}
