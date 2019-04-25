var api_token='e96bc99afcbc4efc1375810c731d33aad2910932';
var company_domain='indiamart-2c1db8';
import $ from 'jquery';
let url = '';
let gblFunc = {
addPerson(name)
{

    var data = {

        'name': name,

    }

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/?api_token=' + api_token;

    $.ajax({
        url: url,
        data: data,
        type: "POST",
        datatype: "json",
        success: "",
        error: ""

    })
},searchPersonByName(name) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/find/term=' + name + '?api_token=' + api_token;

    $.ajax({
        url: url,
        type: "GET",
        datatype: "json",
        success: "",
        error: ""

    })


},searchPersonByid(id) {

    url = 'https://' + company_domain + '.pipedrive.com/v1/persons/' + id + '/?api_token=' + api_token;

    $.ajax({
        url: url,
        type: "GET",
        datatype: "json",
        success: function(res){
            document.getElementById("success").innerHTML = res;
        },
        error: ""

    })


},

}
export default gblFunc;