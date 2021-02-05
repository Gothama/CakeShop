import React, {Component} from 'react';
import "../assets/css/signInSignUp.css"


export default class signup2 extends Component {
    componentDidMount(){
        document.querySelector('.img-btn').addEventListener('click', function()
	      {
		      document.querySelector('.contS').classList.toggle('s-signup')
	      }
      );
    }
    render() {
        return (
            <div>
                 <div className="signInOutBody">
       
       <div className="contS" style={{height:"700px"}} >
         <div className="form1 sign-in" style={{paddingTop:"2px"}}>
           <h2 className="heading2">Sign In</h2>
           <form onSubmit /*= { this.handleSubmitS }*/>
           <label>
             <span>Name</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           <label>
             <span>Address</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           <label>
             <span>Username</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           
           <label>
             <span>Password</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           <label>
             <span>Mobile No</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           <label>
             <span>Email</span>
             <input type="password" class="input1" required /*onChange={this.onChangeSPassword} value={this.state.spassword}*/
             />
           </label>
           
           <button className="submit button1" type="submit" >Sign Up</button>

     </form>
         </div>
     
         <div className="sub-cont">
           <div className="img">
             <div className="img-text m-up">
               <h2 className="heading2">Are you a customer?</h2>
               <p>Sign Up and discover great amount of new opportunities!</p>
             </div>
             <div className="img-text m-in">
               <h2 className="heading2">Are you a supplier</h2>
               <p>Sign Up and discover great amount of new opportunities!</p>
             </div>
             <div className="img-btn">
               <span className="m-up">Sign Up</span>
               <span className="m-in">Sign Up</span>
             </div>
           </div>

           <div className="form1 sign-up"style={{paddingTop:"5px"}}>
             <h2 className="heading2">Sign Up</h2>
             <form /*onSubmit = { this.handleSubmitC }*/>
             <label>
               <span>Name</span>
               <input type="text" class="input1" required /*onChange={this.onChangeCustomerID} value={this.state.customerID}*/
               />
             </label>
             <label>
               <span>Address</span>
               <input type="text" class="input1" required /*onChange={this.onChangeCustomerID} value={this.state.customerID}*/
               />
             </label>
           <label>
             <span>Username</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           
           
             <label>
               <span>Password</span>
               <input type="password" class="input1" required /* onChange={this.onChangeCPassword} value={this.state.cpassword}*/
               />
             </label>
             <label>
             <span>Mobile No</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
           <label>
             <span>Email</span>
             <input type="text" class="input1" required /*onChange={this.onChangeSupplierID} value={this.state.supplierID} */
             />
     
           </label>
             {/*<button type="button" class="button1 submit" /*onClick = {() => this.checkCustomer("123456" , "123456")}>Sign Up Now</button>*/}
             <button type="submit" class="button1 submit">Sign Up</button>
             </form>
           </div>
         </div>
       </div>
     <script type="text/javascript" src="script.js"></script>
     
         </div>
            </div>
        )
    }
}
