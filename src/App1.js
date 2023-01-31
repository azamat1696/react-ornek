 import Home from "./Home";
import {ProviderSite,ProviderAuth } from "./context";
 const App1 = () => {

  return(
<ProviderSite>
 <ProviderAuth>
     <Home />
 </ProviderAuth>
</ProviderSite>

  )

}
export default App1;



// ************************** React form yapisi *********************************//
// import {useEffect, useState} from "react";
//
// const App1 = () => {
//     let genderList = [
//         {key:'1',value:'Erkek'},
//         {key:'2',value:'Kadin'}
//     ];
//
//     let categoryList = [
//         {key:'1',value:'1.Kategry'},
//         {key:'2',value:'2.Kategry'},
//         {key:'3',value:'3.Kategry'},
//         {key:'4',value:'4.Kategry'},
//     ]
//
//     let levels = [
//         {key:'beginner', value:'Baslangic'},
//         {key:'jr.dev', value:'Junior dev'},
//         {key:'sn.dev', value:'Senior dev'}
//     ]
//
//     const [name ,setName] = useState();
//     const [description,setDescription] = useState();
//     const [gender,setGender] = useState(1);
//     const [categories,setCategories] = useState([1,3]);
//     const [rule,setRule] = useState(true);
//     const [rules,setRules] = useState([
//         {key:1, value:'1. kural kabul ediyorum',checked: true},
//         {key:2, value:'2. kural kabul ediyorum',checked: false},
//         {key:3, value:'3. kural kabul ediyorum',checked: true},
//         {key:4, value:'4. kural kabul ediyorum',checked: true}
//     ]);
//     const [level,setLevel] = useState('jr.dev');
//     const [avatar, setAvatar] = useState(false);
//     const [image, setImage] = useState(false);
//     //let selectedGender = genderList.find(e => e.key === gender)
//     let selectedOptions = categories && categoryList.filter(c => categories.includes(+c.key))
//
//
//     const checkRule = (key,checked) => {
//          setRules( rules.map(item => {
//              if (key === item.key)
//              {
//                  item.checked = checked
//              }
//              return item
//          }))
//     }
//     const disabled = rules.every(rule => rule.checked)
//
//     useEffect(() => {
//         const fileReader = new FileReader()
//         if (avatar) {
//             fileReader.addEventListener('load',function() {
//                 setImage(this.result)
//             })
//             fileReader.readAsDataURL(avatar)
//         }
//     },[avatar])
//
//     return (
//         <>
//             {/*input element*/}
//             <input type="text" value={name} onChange={e => setName(e.target.value)}/>
//             <textarea value={description}   cols="30" rows="10" onChange={e => setDescription(e.target.value)}></textarea>
//             <select value={gender} onChange={e => setGender(e.target.value)}>
//                 {
//                     genderList.map(item => (
//                         <option key={item.key} value={item.key}>{item.value}</option>
//                     ))
//                 }
//
//             </select>
//
//             <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions ].map(option => +option.value))}>
//                 {
//                     categoryList.map(item => (
//                         <option value={item.key} key={item.key}>{item.value}</option>
//                     ))
//                 }
//
//             </select>
//             <pre>
//                 {JSON.stringify(selectedOptions,null,2)}
//             </pre>
//
//
//             <label>
//                 <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} />
//                 lutfen kabul edipnn
//             </label>
//             <button disabled={!rule}>Devam edins</button>
// <br/>
//             <br/>
//             {
//                 rules.map(item => (
//                     <label key={item.key}>
//                         <input type="checkbox" checked={item.checked} onChange={event => checkRule(item.key,event.target.checked)}  />
//                         {item.value}
//                     </label>
//                 ))
//             }
//             <button disabled={!disabled}>Devam edins</button>
//             <pre>
//                 {JSON.stringify(rules,null,2)}
//             </pre>
//
//             <br/>
//             {
//                 levels.map((item) => (
//                     <label key={item.key}>
//                         <input type="radio" value={item.key} checked={item.key === level} onChange={e => setLevel(e.target.value)}  />
//                         {item.value}
//                     </label>
//                 ))
//             }
//             <br/>
//             <pre>{JSON.stringify(level,null,2)}</pre>
// <br/>
//             <h1>files</h1>
//             {
//                 avatar && avatar.name
//             }
//             { image && (<img src={image} alt="" width="110px"/>)}
//             <br/>
//             <input type="file" onChange={e => setAvatar(e.target.files[0])}/>
//          </>
//     )
//
// }
//
// export default App1



// ******************* useMemo,memo,useCallback,useReducer ************//
// import {useCallback, useMemo, useReducer, useState} from "react";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import Todos from "./components/Todos";
// function reducer(state,payload) {
//     switch (payload.type) {
//         case 'SET_TODO':
//             return {
//                 ...state,
//                 todo: payload.value
//             }
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todo: '',
//                 todos: [
//                     ...state.todos,
//                     payload.value
//                 ]
//             }
//         case 'SET_SEARCH':
//             return {
//                 ...state,
//                 search: payload.value
//             }
//     }
// }
// const App1 = () => {
//     const [count,setCount] = useState(0)
//     console.log('App1 render oldu')
//     const [state,dispatch] = useReducer(reducer,{
//         todo: '',
//         todos: [],
//         search: ''
//     });
//     const onChangeHandler = useCallback(e => {
//         dispatch({
//             type: 'SET_TODO',
//             value: e.target.value
//         })
//     },[])
//     const onSubmitHandle = useCallback(e => {
//         e.preventDefault()
//         dispatch({
//             type: 'ADD_TODO',
//             value: state.todo
//         })
//     },[state.todo])
//
//     const onSearchHandle = e => {
//         dispatch({
//             type: 'SET_SEARCH',
//             value: e.target.value
//         })
//     }
//      const filteredTodos = useMemo(
//          () => state.todos.filter(e => e.toLocaleLowerCase('tr').includes(state.search.toLocaleLowerCase('tr'))),
//          [state.todos,state.search]
//      )
//     return(
//         <>
//             <Header />
//             <hr/>
//             <h2>{count}</h2>
//             <button onClick={() => setCount(count+1)}>Arttir</button>
//             <hr/>
//
//         <h1>Todo App1</h1>
//           <Form todo={state.todo} onSubmitHandle={onSubmitHandle} onChangeHandler={onChangeHandler}/>
//             <hr/>
//             <input type="text" value={state.search} placeholder="Arayin" onChange={onSearchHandle}/>
//             <Todos todos={filteredTodos} />
//         </>
//     )
// }
// export default App1
//
//
//

///*******************useReducer example************************///
// import {useReducer} from "react";
// import todoReducer from "./reducers/todoReducer"
//
// const App1 = () => {
//   const [state,dispatch] = useReducer(todoReducer,{
//     todos:[],
//     todo:''
//   })
//   const submitHandler = e => {
//     e.preventDefault()
//     dispatch({
//       type: 'ADD_TODO',
//       todo: state.todo
//     })
//   }
//  const onChange = e => {
//     dispatch({
//       type:'SET_TODO',
//       value: e.target.value
//     })
//  }
//   return(
//            <>
//        <h1>Todo App1</h1>
//        <form onSubmit={submitHandler}>
//          <input type="text" value={state.todo} onChange={onChange}/>
//          <button disabled={!state.todo} type="submit">Ekle</button>
//        </form>
//        <ul>
//          { state.todos.map((todo,index) => (
//            <li key={index}>{todo}</li>
//          ))}
//        </ul>
//      </>
//   )
// }
// export default App1
//
//
//





// ***** useState kullanimi ****** //
// import {useState} from "react";
//
// const App1 = () => {
//   const [todo, setTodo] = useState('');
//   const [ todos,setTodos ] = useState([]);
//   const submitHandler = e => {
//     e.preventDefault()
//     setTodos([...todos,todo])
//     setTodo('')
//   }
//   return(
//      <>
//        <h1>Todo App1</h1>
//        <form onSubmit={submitHandler}>
//          <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
//          <button type="submit">Ekle</button>
//        </form>
//        <ul>
//          { todos.map((todo,index) => (
//            <li key={index}>{todo}</li>
//          ))}
//        </ul>
//      </>
//   )
// }
//
// export default App1
//
//






// import './index.css'
// import Button from "./components/Button";
// import Tab from "./components/Tab"
// import ApiTest from "./components/ApiTest"
// import {forwardRef, useRef, useState} from "react";
//
// const Input = forwardRef((props,ref) => {
//     return <input type="text" className="border-4" ref={ref}/>
// })
// // forwardRef React component elemanlari reflemek icin kulaniliyor //
// // Input = forwardRef(Input)
// function App1() {
//   const [activeTab,setActiveTab] = useState(1)
//   //useRef  html elementleri reflemek icin kullaniliyor//
//   const inputRef = useRef();
//   const usereffn = () => {
// inputRef.current.focus()
//   }
//   return (
// <div className="p-4">
//   <Input  className="border-4" ref={inputRef}/>
//   <button className="btn bg-red-500 p-1 items-center text-white" onClick={usereffn}>UseRef</button>
//   <hr/>
//   <button onClick={() => setActiveTab(0)}>
//     Aktif tab git
//   </button>
//   <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
//     <Tab.Panel title="Profil">
//       1.Panel
//     </Tab.Panel>
//     <Tab.Panel  title="Hakkimizda">
//       2.Panel
//     </Tab.Panel>
//     <Tab.Panel  title="Ayarlar">
//       3.Panel
//     </Tab.Panel>
//   </Tab>
// <Button text="Button" variant="success" />
// <Button text="Button" variant="warning" />
// <Button text="Button" variant="danger" />
//   <ApiTest />
// </div>
//   );
// }
//
// export default App1;
