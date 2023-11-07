import { ServiceBroker, Context } from "moleculer"

// create a broker
const broker = new ServiceBroker()

// define a service
broker.createService({
    name: "math",
    actions: {
        add(ctx: Context<{a: number, b: number}>): number {
            return ctx.params.a + ctx.params.b
        }
    }
})

broker.createService({
    name: "strings",
    actions: {
        concat(ctx: Context<{a: string, b: string}>): string {
            return ctx.params.a + " " + ctx.params.b
        }
    }
})

// start the broker
await broker.start()
const responseAdd = await broker.call("math.add", {a: 5, b: 10})
console.log("math.add:", responseAdd)

const responseConcat = await broker.call("strings.concat", {a: "guilherme", b: "massoqueto"})
console.log("strings.concat:", responseConcat)