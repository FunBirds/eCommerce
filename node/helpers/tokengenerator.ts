import jwt from 'jsonwebtoken'

export  function tokenGenerator(email: string){
	const token =  jwt.sign({email}, process.env.JWT_SECRET || '')
	return token
}
export function tokenParser(token: string){
	const decoded = jwt.verify(token, process.env.JWT_SECRET || '')
	return decoded
}