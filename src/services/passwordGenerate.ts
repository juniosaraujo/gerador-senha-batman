export default function generatePass() {
    let password: string = ''
    let characters: string = 'Aa@#$123456789bcdefghijBCDEFGHIJ!'

    let passwordLength = 8
    for(let index = 1; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * passwordLength)
        )
    }
    return password
}