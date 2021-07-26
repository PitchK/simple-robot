function show(){
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = '2px solid black';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }
}

var unloadedPhoto = 'https://3358nc4e1je93h11tu493nryr3i-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/image-coming-soon.jpg';

document.getElementById('menu').addEventListener('click', show);

var allModels = [{modelName: 'Sea shrimp', modelURL: 'shrimp.jpg', difficulty: 5.5, tags: ['Living', 'Attacker'], description: 'A small shrimp, complete with two front claws and its distinguishable flexible tail.', webLink: '/sea-shrimp', time: '10-14 min'}, 
{modelName: 'Attacker fish', modelURL: 'attackerfish.jpg', difficulty: 6.5, tags: ['Living', 'Attacker'], description: 'null', webLink: '/attacker-fish', time: '12-20 min'}];

for (var i = 0; i < allModels.length; i++){
    var d = document.createElement('div');
    d.className = 'outer';
    document.getElementById('allModels').appendChild(d);

    var image = document.createElement('img');
    image.setAttribute('src', allModels[i].modelURL);
    image.className = 'similarImage';
    document.getElementsByClassName('outer')[i].appendChild(image);
    
    var innerDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    document.getElementsByClassName('outer')[i].appendChild(innerDiv);

    var title = document.createElement('p');
    title.className = 'modelTitle';
    title.innerHTML = allModels[i].modelName;
    document.getElementsByClassName('innerDiv')[i].appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.className = 'modelSubtitle';
    subtitle.innerHTML = allModels[i].description;
    document.getElementsByClassName('innerDiv')[i].appendChild(subtitle);

    //difficulty display
    var difficulty = document.createElement('div');
    difficulty.className = 'difficultyDiv';
    document.getElementsByClassName('innerDiv')[i].appendChild(difficulty);

    var word = document.createElement('p');
    word.className = 'difficultyWord';
    word.innerHTML = 'Difficulty: ';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(word);

    var num = document.createElement('p');
    num.className = 'difficultyDisplay2';
    num.innerHTML = allModels[i].difficulty + '/10';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(num);

    var time = document.createElement('p');
    time.className = 'time';
    time.innerHTML = ' | ⌛ Estimated time: 10-12 min';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(time);

    //bottom two buttons

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Instructions');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks2';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Watch tutorial');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks2';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    
}

for (var i = 0; i < document.getElementsByClassName('difficultyDisplay2').length; i++){
    document.getElementsByClassName('difficultyDisplay2')[i].style.background = 'linear-gradient(to right, #42aaf5 0%, #42aaf5 ' + allModels[i].difficulty*10 + '%, lightgrey ' + allModels[i].difficulty*10 +'%, lightgrey 100%)';
}

function scrollFirst(){
    document.getElementById('instructions').scrollIntoView();
}

function scrollSecond(){
    document.getElementById('gallery').scrollIntoView();
}

function scrollThird(){
    document.getElementById('similarModels').scrollIntoView();
}

document.getElementsByClassName('explanationLinks')[0].addEventListener('click', scrollFirst);
document.getElementsByClassName('explanationLinks')[1].addEventListener('click', scrollSecond);
document.getElementsByClassName('explanationLinks')[2].addEventListener('click', scrollThird);

var darkMode = 'off';

function change(){
    if(darkMode === 'off'){
        darkMode = 'on';
        document.getElementById('instructionSection').style.backgroundColor = 'black';
        document.getElementById('instructionSection').style.color = 'white';
        document.getElementById('instructionImage').style.filter = 'invert(1)';
        document.getElementById('switchOuter').style.border = '2px solid white';
        document.getElementById('switchOuter').style.backgroundColor = 'orange';
        document.getElementById('switchInner').style.backgroundColor = 'white';
        document.getElementById('switchInner').style.transform = 'translate(120%, 0px)';
    }else{
        darkMode = 'off';
        document.getElementById('instructionSection').style.backgroundColor = 'whitesmoke';
        document.getElementById('instructionSection').style.color = 'black';
        document.getElementById('instructionImage').style.filter = 'invert(0)';
        document.getElementById('switchOuter').style.border = '2px solid black';
        document.getElementById('switchOuter').style.backgroundColor = 'whitesmoke';
        document.getElementById('switchInner').style.backgroundColor = 'black';
        document.getElementById('switchInner').style.transform = 'translate(0px, 0px)';

    }
}

document.getElementById('switchOuter').addEventListener('click', change);