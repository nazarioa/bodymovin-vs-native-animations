var items = 0;

document.addEventListener('DOMContentLoaded', () => {
    domContentLoaded = Date.now();
});

document.addEventListener('readystatechange', event => {
    switch (event.target.readyState) {
        case 'interactive':
            interactiveTime = Date.now();
            break;
        case 'complete':
            completeTime = Date.now();
            break;
    }
});

window.addEventListener('load', () => {
    loadTime = Date.now();
    items = document.querySelectorAll('.test').length;
    const div = document.querySelector('.results');
    div.innerHTML = `<table>
<tr>
    <th rowspan="2">Items</th>
    <th rowspan="2">Start Time</th>
    <th colspan="2">DOMContentLoaded</th>
    <th colspan="2">Loading</th>
    <th colspan="2">Complete</th>
    <th colspan="2">Load</th>
    <th rowspan="2">Items/Duration</th>
</tr>
<tr>
    <th>Time</th>
    <th>Duration</th>
    
    <th>Time</th>
    <th>Duration</th>
    
    <th>Time</th>
    <th>Duration</th>
    
    <th>Time</th>
    <th>Duration</th>
</tr>
<tr>
    <td class="items"><span>${items}</span></td>
    <td class="start"><span>${timerStart}</span></td>
    
    <td class="end interactive"><span>${interactiveTime}</span></td>
    <td class="duration interactive"><span>${interactiveTime - timerStart}</span></td>
    
    <td class="end domContentLoaded"><span>${domContentLoaded}</span></td>
    <td class="duration domContentLoaded"><span>${domContentLoaded - timerStart}</span></td>
    
    <td class="end completeTime"><span >${completeTime}</span></td>
    <td class="duration completeTime"><span>${completeTime - timerStart}</span></td>
    
    <td class="end loadTime"><span>${loadTime}</span></td>
    <td class="duration loadTime"><span >${loadTime - timerStart}</span></td>
    
    <td class="ratio"><span>${items}/${loadTime - timerStart} = ${items/(loadTime - timerStart)}</span></td>
</tr>
</table>`;
});
