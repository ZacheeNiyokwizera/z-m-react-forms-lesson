import {useState } from "react";


const FewInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  

// doing the job 

 const saveContact = (e) => {
  e.preventDefault();
if(name && email){

  // on succes
// glab the form values and keep them inside the person object
  const person = { id: new Date().getTime().toString(), name, email}

// glab the person object keep it inside the people array
console.log(person)
setPeople((people) =>{
  return [...people, person]
})

setName('')
setEmail('')


} else {
  // empty values
  console.log("Plz fill out the form !")

}

 }


 console.log(people)

   return (
     <>
       <article>

         <h3 className="title">Few inputs </h3>
         <form className='form' onSubmit={saveContact} autoComplete="on">
           <div className='form-control'>
             <label htmlFor='firstName'>Name : </label>
             <input
               type='text'
               id='firstName'
               name='firstName'
               value={name}
               onChange={(e)=> setName(e.target.value)}
             />
           </div>
           <div className='form-control'>
             <label htmlFor='email'>Email : </label>
             <input
               type='email'
               id='email'
               name='email'
               value={email}
               onChange={(e)=> setEmail(e.target.value)}
             />
           </div>
           <button type='submit'>add person</button>
         </form>
      
        {people.map((person) => {
             const {id, name, email} = person;
             return(
               <div className="item" key={id}>
                <h4>{name}</h4>
                <p>{email}</p>
                <button className="btn">Delete</button>
               </div>
             )
        })}

       </article>
     </>
   );
 };

export default FewInputs;
