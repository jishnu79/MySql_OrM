import express from 'express'
const {PrismaClient} =require('@prisma/client')

const app = express()
 
app.use(express.json()) 

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.findMany()
    console.log(user);
    
}

main()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

app.listen(3000, () => {
    console.log("Server running on port 3000");
})