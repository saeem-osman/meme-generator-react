import React,{Component} from 'react'
import './App.css'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText: "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
                .then(response => {
                    const {memes} = response.data
                    console.log(memes[0])
                    this.setState({
                        allMemeImgs : memes
                    })
                })
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const ranNum = this.state.allMemeImgs[randomNumber].url
        this.setState({
            randomImg : ranNum
        })
    }
    render(){
        return(
            <div className="memeView">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name = "topText"
                    value = {this.state.topText} 
                    onChange={this.handleChange} 
                    placeholder="Top text"/>
                    <input type="text" name = "bottomText"
                    value = {this.state.bottomText} 
                    onChange={this.handleChange} 
                    placeholder="Bottom Text"/>
                    <button>Submit</button>

                </form>

                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
                <img className="memeImg" src={this.state.randomImg} alt="" />
            </div>
        )
    }
}


export default MemeGenerator