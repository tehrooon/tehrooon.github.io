const date = new Date();
let year = date.getFullYear();
let yearsAgo = year - 5;

const asciiArt = `<pre>                       d8b         
                       <span class="red">qop</span>        
 8888b.  88888b.d88b.  888 888d888 
    "88b 888 "888 "88b 888 888P"   
.d888888 888  888  888 888 888     
888  888 888  888  888 888 888     
"Y888888 888  888  888 888 888     <span class="red">${yearsAgo}-${year}</span>
_______________________Y8Y___________________
<span class="red">________________________Y</span>_____________________</pre>`

const commands = [
	["guest", asciiArt],
	["whoami", "amir<br />self-educator & tech enthusiast."],
	["more aboutMe", "experiencer;<br />doc reader;<br />learner;<br />coder;<br />network & system admin."],
	["addresses mail --all", "theamir@tutanota.com<br />4mi2@proton.me<br />0x411112@skiff.com<br />please send mail from the same mail service."],
	["addresses blockchain --all", "ETH: 0xD893c1B6FB3a3D38ebe91cb3e463Cb1E4DcC2999<br />SOL: Fe6jVK6EzojEc1ymeYMziQJgkwy5M9mii7PJHUvNE4JD "],
	["pgp --list-public-key", 'my pgp public key:<br />rsa4096 <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/C1826531F0F312291A461373479EC0B4C6FD024B">C1826531F0F312291A461373479EC0B4C5FD024B   </a><sub> link to keys.openpgp.org</sub>'],
	["contact", '<a href="https://411112.github.io/contact">411112.github.io/contact   </a><sub> link to contact page</sub>'],
	['languages --all', 'persian, english, deutsch, ...'],
	['programming languages', 'bash, python, js, ...'],
	['developing tools', 'git, docker'],
	['policy list ruleset', 'no binary file.<br />zero trust.']
];
