
const Tab = ({children,activeTab,setActiveTab}) => {

  return (
  <>
    <nav>{children.map( (tab,index) => (
        <button
            onClick={()=> setActiveTab(index)}
            className={activeTab ===index ? 'bg-green-100':'bg-red-100'}
            key={index}
        >
          {tab.props.title}
        </button>
    ))}</nav>
    <div>{children[activeTab]}</div>
  </>
  )
}
Tab.Panel = (props) => {
  return(
      <div>{props.children}</div>
  )
}
export default Tab;
