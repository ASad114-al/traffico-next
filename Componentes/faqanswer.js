 import Component from 'next/document';
 import FAQ from '../Componentes/faqdata';

 

class FAQItem extends Component {
    state = {
        isShown: false,
        isShown2: false
    }
    handleIsShown = () => {
        this.setState({ isShown: !this.state.isShown, isShown2: false });
    }
    handleIsShown2 = () => {
        this.setState({ isShown2: !this.state.isShown2 });
    }
    render() {
       
        return (
           <article className='form'>
                <div  style={{ width: "400px" }}>
                <div className="flex">
                    <h4>What is a professional traffic permit? </h4>
                    <button onClick={this.handleIsShown}> {!this.state.isShown ? "+" : "-"} </button>
                </div>
                <div className="flex" style={{ display: this.state.isShown ? "flex" : "none" }}>
                    <h4>Traffic permits are a requirement for conducting professional traffic.</h4>
                    {/* <button onClick={this.handleIsShown2}> {!this.state.isShown2 ? "+" : "-"} </button> */}
                </div>
                
            </div>
            <div  style={{ width: "400px" }}>
                <div className="flex">
                    <h4>What is a professional traffic permit? </h4>
                    <button onClick={this.handleIsShown2}> {!this.state.isShown2 ? "+" : "-"} </button>
                </div>
                <div className="flex" style={{ display: this.state.isShown2 ? "flex" : "none" }}>
                    <h4>Traffic permits are a requirement for conducting professional traffic.</h4>
                    {/* <button onClick={this.handleIsShown2}> {!this.state.isShown2 ? "+" : "-"} </button> */}
                </div>
                
            </div>
           </article>
            
        );
    }
}

export default FAQItem;