import Bike from './Bike';
import Events from './Events';
import Iot from './Iot';
import Default from './Default';

function Content({ menuItem }) {
    let component;
    switch (menuItem) {
        case 'Bikes':
            component = <Bike />;
            break;
        case 'IoT':
            component = <Iot />;
            break;
        case 'Events':
            component = <Events />;
            break;
        default:
            component = <Default />;
    }

    return (
        <div className='container md:w-full md:h-full'>
            {component}
        </div>
    );
}

export default Content;
