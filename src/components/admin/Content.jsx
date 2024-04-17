import Bike from './Bike'
import Events from './Events'
import Iot from './Iot'
import Default from './Default'

function Content({ menuItem }) {
    switch (menuItem) {
        case (menuItem === 'Bikes'):
            return <Bike />
        case (menuItem === 'menu-item-2'):
            return <Iot />
        case (menuItem === 'menu-item-3'):
            return <Events />
        default:
            return <Default />
    }
}

export default Content