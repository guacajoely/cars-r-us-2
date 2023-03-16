const database = {

    paints: [
        { id: 1, name: "Silver", price: 10000 },
        { id: 2, name: "Midnight Blue", price: 10250 },
        { id: 3, name: "Firebrick Red", price: 10250 },
        { id: 4, name: "Spring Green", price: 10250 }
    ],

    interiors: [
        { id: 1, name: "Beige Fabric", price: 1000 },
        { id: 2, name: "Charcoal Fabric", price: 1000 },
        { id: 3, name: "White Leather", price: 1500 },
        { id: 4, name: "Black Leather", price: 1500 },
    ],

    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 1000 },
        { id: 2, name: "17-inch Pair Radial Black", price: 1000 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 1500 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 1500 },
    ],

    tech: [
        { id: 1, name: "Basic Package (basic sound system)", price: 1000 },
        { id: 2, name: "Navigation Package (includes integrated navigation controls)", price: 2000 },
        { id: 3, name: "Visibility Package (includes side and rear cameras)", price: 2000 },
        { id: 4, name: "Ultra Package (includes navigation and visibility packages)", price: 2600 }
    ],

    orders: [
        { 
        id: 1, 
        paintID: 1, 
        wheelID: 2,
        techID: 3,
        interiorID: 2
        }
    ],

    orderBuilder: {},

}



export const getPaints = () => {
    return database.paints.map(obj => ({...obj}))
}