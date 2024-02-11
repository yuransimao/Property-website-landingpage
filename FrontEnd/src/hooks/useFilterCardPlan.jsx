import { useState } from "react"
const DataPlan =[
    {
      plan: 'Anually',
      title:"Lite Plan",
      price: 120,
      priceType:'mon',
      description: "They will make list of potential employees to be interviewed based.",
      list: ["50 Listings", "Contact with Agent", "One Year Validity", "7/24 Fully Suport"]
    },
    {
      plan: 'Anually',
      title: "Basic Plan",
      price: 150,
      priceType:'mon',
      description: "They will make list of potential employees to be interviewed based.",
      list: ["50 Listings", "Contact with Agent", "One Year Validity", "7/24 Fully Suport"]
    },
    {
      plan: 'Anually',
      title: "Plus Plan",
      price: 220,
      priceType:'mon',
      description: "They will make list of potential employees to be interviewed based.",
      list: ["50 Listings", "Contact with Agent", "One Year Validity", "7/24 Fully Suport"]
    },
  ]
function UseFilterCardPlan(){

    
  const [Plan, SetPalan] = useState('Anually')
  const [DataPlanNew, setDataPlanNew] = useState(DataPlan)

  


  const HandleFilterPlan = async (event) =>{
    const buttonText = event.target.textContent;
     
    const DataNewPlan = await DataPlan.filter( item => item.plan  == buttonText);
    SetPalan(buttonText)
    setDataPlanNew(DataNewPlan)
   
  }


  const PlanFilter = DataPlanNew.filter(item => item.plan === Plan) 

  return{PlanFilter, HandleFilterPlan, Plan}

}

export {UseFilterCardPlan}