import {Component} from 'react'

import LanguageTabItem from '../LanguageTabItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiGreetings extends Component {
  state = {
    activeTab: languageGreetingsList[0],
  }

  onChangeLanguage = id => {
    const activeTab = languageGreetingsList.filter(each => each.id === id)

    this.setState({activeTab: activeTab[0]})
  }

  render() {
    const {activeTab} = this.state
    const {id, imageUrl, imageAltText} = activeTab

    return (
      <>
        <div className="bg-container">
          <h1 className="main-heading">Multilingual Greetings</h1>
          <ul className="tab-item-container">
            {languageGreetingsList.map(each => (
              <LanguageTabItem
                key={each.id}
                data={each}
                onChangeLanguage={this.onChangeLanguage}
                isActive={each.id === id}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} className="image" />
        </div>
      </>
    )
  }
}

export default MultiGreetings
