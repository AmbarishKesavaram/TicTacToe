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

export default userDB;
export {
    insert
}