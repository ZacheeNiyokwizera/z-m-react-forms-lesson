import {useState } from "react";


const MultiInputs = () => {

  const [person, setPerson] = useState({name:'' , age:'', contact:'', email:''});

  const [people, setPeople] = useState([]);
  

const handleChange  = (e) => {
const name = e.target.name;
const value= e.target.value;

setPerson({...person, [name]:value});
}

 const saveContact = (e) => {
  e.preventDefault();
  const { name, email, age, contact} = person;
if(name  && age && email && contact){

  const newPerson = {...person, id: new Date().getTime().toString()}
setPeople([...people, newPerson])

 setPerson({name:'' , age:'', contact:'', email:''})

} else {
  // empty values
  console.log("Plz fill out the form !")

}

 }

console.log(people)

   return (
     <>
       <article>

         <h1 className="title"> Contact List</h1>
         <h3 className="title">Multiple inputs </h3>
         <form className='form' onSubmit={saveContact} autoComplete="on">
           <div className='form-control'>
             <label htmlFor='firstName'>Name : </label>
             <input
               type='text'
               id='name'
               name='name'
               value={person.name}
               onChange={handleChange}
             />
             </div>
             <div className='form-control'> 
             <label htmlFor='email'>Age </label>
            
             <input
               type='number'
               id='age'
               name='age'
               value={person.age}
               onChange={handleChange}
             />
           </div>
           <div className='form-control'>
             <label htmlFor='email'>Phone number </label>
             <input
               type='number'
               id='contact'
               name='contact'
               value={person.contact}
               onChange={handleChange}
             />
              </div>
              <div className='form-control'> 
            <label htmlFor='email'>Email : </label>
               <input
               type='text'
               id='email'
               name='email'
               value={person.email}
               onChange={handleChange}
             />


           </div>
           <button type='submit'>add person</button>
         </form>
      
        {people.map((person) => {
             const {id, age, name, contact, email} = person;
             return(
               <div className="item" key={id}>
                <h4>{name}</h4>
                <p>{age}</p>
                <p>{contact}</p>
                <p>{email}</p>
                <button className="btn">Delete</button>
               </div>
             )
        })}

       </article>
     </>
   );
 };

export default MultiInputs;
