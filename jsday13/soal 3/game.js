export default function hitungtotalpoint(poin) {
    return poin.reduce ((acc, item) => acc + item, 0)
}

export let POIN_MAKSIMAL = 1000;
export let POIN_BONUS = 50;
