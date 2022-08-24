const question = require('./question')


const fetch_answer = async () => {
    const name = await question.questions('halo, can you tell me your name?')
    const fav_prog = await question.questions('what is your fav programming language?') 

    question.save_questions(name , fav_prog)

} 

fetch_answer()
 