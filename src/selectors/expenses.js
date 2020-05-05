import moment from 'moment';

const getVisibleExpenses=(expense,{text,sortBy,startDate,endDate})=>{
    return expense.filter((expenses)=>{
        const createdAtMoment=moment(expenses.createdAt);
        const startDateMatch = startDate?startDate.isSameOrBefore(createdAtMoment, 'day') :true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day'):true;
        
        const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());
      //  console.log(text.length,text);
        //if(text.length==0)
        //textMatch=true;
        return startDateMatch && endDateMatch && textMatch;
    
        }).sort((a,b)=>{
            if(sortBy==='date')
            {
                return a.createdAt<b.createdAt?1:-1
            }
            else if(sortBy==='amount')
            {
                return a.amount<b.amount?1:-1
            }
    });
    }
export default getVisibleExpenses;