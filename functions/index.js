const functions = require("firebase-functions");
const admin = required('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user) => {
        return admin.auth().setCustomUserClaims(user.id, {
            admin: true,
        });
    }).then(() =>{
        return {
            message: `Success! ${data.email} has been made an admin!`
        }
    }).catch(err => {
        console.log(err);
    });
});
