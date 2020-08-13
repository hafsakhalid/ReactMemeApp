import React, {Component} from "react"

 class MemeGenerator extends Component {
    constructor() { 
        super ()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            imgChange: [],


        }

        this.handleChange = this.handleChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    //getting the data from an API

    componentDidMount() { 
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ imgChange: memes })
        })
}
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value})
}

    onClick(event) {
        event.preventDefault()
        const randomNumber = Math.floor(this.state.imgChange.length * Math.random())
        const newImg = this.state.imgChange[randomNumber].url
        this.setState({ 
            randomImg: newImg
        })
        

    }

    

    render() { 
    return (<div>
    <form > 
        <input className="memeform"
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange} />

        <input className="memeform"
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange} />
    </form>
     
    <div className="meme">
     <img 
        src={this.state.randomImg} 
        alt ="" /> 
        <h1 className="top">{this.state.topText}</h1>
        <h1 className="bottom">{this.state.bottomText}</h1>
       
   
         <button className="memebutton" 
         onClick={this.onClick}>Generate</button>
   
    </div> 
    </div> )
    
    
}

} 

export default MemeGenerator;

    
    
    
    
    
    
    