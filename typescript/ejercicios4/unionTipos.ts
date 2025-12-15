function procesarId(id: Number | String): string {
    return `ID: ${id}`;
}

console.log(procesarId(123));        // ID: 123
console.log(procesarId("ABC123"));   // ID: ABC123