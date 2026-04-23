const z = require("zod")

const schema = z.array(z.number())

const schema2 = z.object({
    email: z.email(),
    password: z.string().min(8)
})

const validateInput = (arr) => {
    const response = schema2.safeParse(arr);
    console.log(response);
    return response.success
}

console.log(validateInput({
    email: "test@mail.com",
    password: "12345678"
}))