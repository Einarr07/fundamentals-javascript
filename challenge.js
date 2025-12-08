const userDataBase = [
    {
        username: 'John',
        password: '123456',
    },
    {
        username: 'Johan',
        password: '123456',
    }
]

const usersTimeLine = [
    {
        username: 'Estefania',
        timeline: 'I love JavaScript',
    },
    {
        username: 'Domenica',
        timeline: 'I love Java'
    },
    {
        username: 'Pamela',
        timeline: 'I love python'
    }
]

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('User: ', (inputUser) => {
    readline.question('Password: ', (inputPassword) => {
        const user = userDataBase.find(user =>
            user.username === inputUser && user.password === inputPassword
        );

        if (user) {
            console.log(`\n✔️ Welcome ${user.username}!\n`);
            console.log("---- User Timeline ----");

            usersTimeLine.forEach(post => {
                console.log(`\n👤 ${post.username}\n📌 ${post.timeline}`);
            });
        } else {
            console.log('❌ Incorrect credentials');
        }

        readline.close();
    })
})
