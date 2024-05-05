var upperprojectdiv1 = document.getElementById('upperprojectdiv1');
var upperprojectdiv2 = document.getElementById('upperprojectdiv2');
var lowerprojectdiv1 = document.getElementById('lowerprojectdiv1');
var lowerprojectdiv2 = document.getElementById('lowerprojectdiv2');





upperprojectdiv1.addEventListener("click",upperdiv1);
upperprojectdiv2.addEventListener("click",upperdiv2);
lowerprojectdiv1.addEventListener("click",lowerdiv1);
lowerprojectdiv2.addEventListener("click",lowerdiv2);





function upperdiv1()
{
    window.open('https://sortingvisualizer.orangecom.xyz/');
}
function upperdiv2()
{
    window.open('https://spotifyclone.orangecom.xyz/');
}
function lowerdiv1()
{
    window.open('https://furniture-premium.vercel.app/');
}
function lowerdiv2()
{
    window.open('https://aadarshprofile.orangecom.xyz/');
}

function SendEmail () 
        {
            console.log(Window.Email);
           Email.send({
                SecureToken : "dadf3d1f-20c1-4d43-9004-d122102bff50",
                To : 'kumarn206@gmail.com',
                From : "info@orangecom.xyz",
                Subject : "Contact Inquiry From Resume Website",
                 Body : "Name : "+document.getElementById('name').value
                + "<br> Mine Email  : "+document.getElementById('email').value
                + "<br> Client's Email  : "+document.getElementById('emailclient').value
                +  "<br> Phone Number : " + document.getElementById('phone').value
                + "<br> Message : "+document.getElementById('message').value
            }).then(
              message => alert("Message Sent Successfully")
            );     
        }
