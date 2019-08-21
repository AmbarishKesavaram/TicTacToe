const userDB = (dbname,table)=>{
    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.open();

    return db;

}

//insert 

const insert =(dbtable,data) =>{
    let flag = empty(data);
    if(flag){
    dbtable.bulkAdd([data])
    console.log("registered..");
    }else{
    console.log("provide data..");

    }
};

// check textbox validation
const empty = object => {
    let flag = false;
    for (const value in object) {
      if (object[value] != "" && object.hasOwnProperty(value)) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
  };


  //
  const getData = (dbname, fn) => {
    let index = 0;
    let obj = {};
    dbname.count(count => {
      // count rows in the table using count method
      if (count) {
        dbname.each(table => {
          // table => return the table object data
          
          obj = table;
          fn(obj, index++); // call function with data argument
        });
      } else {
        fn(0);
      }
    });
  };

export default userDB;
export {
    insert,
    getData
};