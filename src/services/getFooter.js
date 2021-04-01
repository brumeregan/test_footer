export const getFooter = () => {
    return fetch('https://shop-bff.fyndiq.se/cms/footer').then((res) => res.json()).then((res) => res?.footer?.blocks)
}
