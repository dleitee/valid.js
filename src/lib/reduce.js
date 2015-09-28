export const reduce = (f, z, it) => {
    const iterator = it[Symbol.iterator]();
    const go = (acc, it) => {
        const {value, done} = it.next()
        return done ? acc : go(f(acc, value), it)
    }

    return go(z, iterator)
}
