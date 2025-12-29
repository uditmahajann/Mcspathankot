export const feeStructureQuery = `
*[_type == "feeStructure"][0]{
  tables[]{
    key,
    title,
    description,
    rows[]{
      class,
      annual,
      one,
      two,
      three,
      four
    }
  }
}
`
