import React from 'react'

type State = {
    name: string,
    abbreviation: string
}
const STATES: State[] = [
    {
        name: 'Alabama',
        abbreviation: 'AL'
    },
    {
        name: 'Alaska',
        abbreviation: 'AK'
    },
    {
        name: 'American Samoa',
        abbreviation: 'AS'
    },
    {
        name: 'Arizona',
        abbreviation: 'AZ'
    },
    {
        name: 'Arkansas',
        abbreviation: 'AR'
    },
    {
        name: 'California',
        abbreviation: 'CA'
    },
    {
        name: 'Colorado',
        abbreviation: 'CO'
    },
    {
        name: 'Connecticut',
        abbreviation: 'CT'
    },
    {
        name: 'Delaware',
        abbreviation: 'DE'
    },
    {
        name: 'District Of Columbia',
        abbreviation: 'DC'
    },
    {
        name: 'Federated States Of Micronesia',
        abbreviation: 'FM'
    },
    {
        name: 'Florida',
        abbreviation: 'FL'
    },
    {
        name: 'Georgia',
        abbreviation: 'GA'
    },
    {
        name: 'Guam',
        abbreviation: 'GU'
    },
    {
        name: 'Hawaii',
        abbreviation: 'HI'
    },
    {
        name: 'Idaho',
        abbreviation: 'ID'
    },
    {
        name: 'Illinois',
        abbreviation: 'IL'
    },
    {
        name: 'Indiana',
        abbreviation: 'IN'
    },
    {
        name: 'Iowa',
        abbreviation: 'IA'
    },
    {
        name: 'Kansas',
        abbreviation: 'KS'
    },
    {
        name: 'Kentucky',
        abbreviation: 'KY'
    },
    {
        name: 'Louisiana',
        abbreviation: 'LA'
    },
    {
        name: 'Maine',
        abbreviation: 'ME'
    },
    {
        name: 'Marshall Islands',
        abbreviation: 'MH'
    },
    {
        name: 'Maryland',
        abbreviation: 'MD'
    },
    {
        name: 'Massachusetts',
        abbreviation: 'MA'
    },
    {
        name: 'Michigan',
        abbreviation: 'MI'
    },
    {
        name: 'Minnesota',
        abbreviation: 'MN'
    },
    {
        name: 'Mississippi',
        abbreviation: 'MS'
    },
    {
        name: 'Missouri',
        abbreviation: 'MO'
    },
    {
        name: 'Montana',
        abbreviation: 'MT'
    },
    {
        name: 'Nebraska',
        abbreviation: 'NE'
    },
    {
        name: 'Nevada',
        abbreviation: 'NV'
    },
    {
        name: 'New Hampshire',
        abbreviation: 'NH'
    },
    {
        name: 'New Jersey',
        abbreviation: 'NJ'
    },
    {
        name: 'New Mexico',
        abbreviation: 'NM'
    },
    {
        name: 'New York',
        abbreviation: 'NY'
    },
    {
        name: 'North Carolina',
        abbreviation: 'NC'
    },
    {
        name: 'North Dakota',
        abbreviation: 'ND'
    },
    {
        name: 'Northern Mariana Islands',
        abbreviation: 'MP'
    },
    {
        name: 'Ohio',
        abbreviation: 'OH'
    },
    {
        name: 'Oklahoma',
        abbreviation: 'OK'
    },
    {
        name: 'Oregon',
        abbreviation: 'OR'
    },
    {
        name: 'Palau',
        abbreviation: 'PW'
    },
    {
        name: 'Pennsylvania',
        abbreviation: 'PA'
    },
    {
        name: 'Puerto Rico',
        abbreviation: 'PR'
    },
    {
        name: 'Rhode Island',
        abbreviation: 'RI'
    },
    {
        name: 'South Carolina',
        abbreviation: 'SC'
    },
    {
        name: 'South Dakota',
        abbreviation: 'SD'
    },
    {
        name: 'Tennessee',
        abbreviation: 'TN'
    },
    {
        name: 'Texas',
        abbreviation: 'TX'
    },
    {
        name: 'Utah',
        abbreviation: 'UT'
    },
    {
        name: 'Vermont',
        abbreviation: 'VT'
    },
    {
        name: 'Virgin Islands',
        abbreviation: 'VI'
    },
    {
        name: 'Virginia',
        abbreviation: 'VA'
    },
    {
        name: 'Washington',
        abbreviation: 'WA'
    },
    {
        name: 'West Virginia',
        abbreviation: 'WV'
    },
    {
        name: 'Wisconsin',
        abbreviation: 'WI'
    },
    {
        name: 'Wyoming',
        abbreviation: 'WY'
    }
]

export default function App() {
    const [states, setStates] = React.useState(new Array<State>())
    return <div>
        <div><h1>50-States Game</h1>
            <input type="text" id="stateInput" placeholder="Enter state name here..."></input>
            <button onClick={() => {
                const input = document.getElementById('stateInput')
                const state = (input instanceof HTMLInputElement && input.value) ? STATES.find((stateObj) => stateObj.name.toLowerCase() === input.value.trim().toLowerCase() || stateObj.abbreviation.toLowerCase() === input.value.trim().toLowerCase()) : undefined
                if (state && !states.includes(state)) {
                    states.push(state)
                    setStates([...states])
                }
            }}>Add</button></div>
        <ul>{states.map((state) => <li key={state.abbreviation}>{`[${state.abbreviation}] ${state.name} `}<button onClick={() => {
            const index = states.indexOf(state)
            if (index !== -1) { setStates(states.filter((v) => v !== state)) }
        }}>Remove</button></li>).reverse()}</ul>
    </div>
}
