const pronouns = ['el', 'la', 'mi'];
const adjs = ['gran', 'nuevo' ];
const nouns = ['canario', 'logg', 'termicom'];
const extensions = ['com', 'cl', 'io', 'dev', 'gg']


const generateDomain = () => {
    const domains = []
    pronouns.forEach(pronoun => {
        adjs.forEach(adj => {
            nouns.forEach(noun => {
                extensions.forEach(extension => {
                    let domain = noun.endsWith(extension) ? pronoun + adj + noun.split(extension)[0] + '.' + extension : pronoun + adj + noun + '.' + extension    
                    domains.push(domain)
                })
            })
        })
    })
    console.log(domains)
}

generateDomain()