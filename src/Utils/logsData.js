const dbConnect = require("../db/config");

const logsData = async(transactionId,thirdpart_status,description,amount,agent_name,status,service_name,trxId)=>{
    const data = {
        transactionId: transactionId,
        thirdpart_status: thirdpart_status,
        service_name: service_name,
        status: status,
        description: description,
        amount: amount,
        agent_name: agent_name,
        transaction_reference: trxId
    };

    //Insert into logs table
     dbConnect.query('INSERT INTO logs SET ?', data, (error, results) => {
        if (error) {
            console.error('Error inserting into logs: ' + error.message);
            //res.status(500).send('Error inserting into logs');
            return;
        }
        console.log('Data inserted into logs: ', results);
        //res.send('Data inserted into logs');
    });
};
const updateLogs = async(transactionId,status,trxId)=>{
  
    //Insert into logs table
     dbConnect.query(
        'UPDATE logs SET transactionId = ?, status = ? WHERE transaction_reference = ?',
        [transactionId, status, trxId],
        (error, results) => {  
          if (error) {
            console.error('Error executing update query:', error);
           // res.status(500).send('Error updating employee salary');
          } else {
            console.log('Update successful');
           // res.send('Employee salary updated successfully');
          }
        }
      );
};

module.exports= {logsData,updateLogs}