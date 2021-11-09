import React from 'react'

// export default class OutPut extends Component {
//     render() {
//         console.log('Props', this.props)
//         return (
//             <div>
//                 <h1>{this.props.displayText}</h1>
//                 <button
//                     type="button"
//                     className="btn btn-primary"
//                     onClick={() => this.props.toggleText()}
//                 >change text</button>
//             </div>
//         )
//     }
// }


export default function OutPut(props) {
    return (
        <div>
            <h1>{props.displayText}</h1>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => props.toggleText()}
            >change text</button>
        </div>
    )
}