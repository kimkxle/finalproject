/*var myData = new Array(['Jan', 2], ['Feb', 1], ['Mar', 3], ['Apr', 6], ['May', 8], ['Jun', 10], ['Jul', 9], ['Aug', 8], ['Sep', 5], ['Oct', 6], ['Nov', 2], ['Dec', 4]);
var colors = ['#CE0000', '#EF2323', '#D20202', '#A70000', '#850000', '#740000', '#530000', '#850000', '#B00000', '#9C0404', '#CE0000', '#BA0000'];
var myChart = new JSChart('chartid', 'bar');
myChart.setDataArray(myData);
myChart.colorizeBars(colors);
myChart.setDataArray(myData);
myChart.setAxisColor('#9D9F9D');
myChart.setAxisWidth(1);
myChart.setAxisNameX('Months');
myChart.setAxisNameY('Values');
myChart.setAxisNameColor('#655D5D');
myChart.setAxisNameFontSize(9);
myChart.setAxisPaddingLeft(50);
myChart.setAxisValuesDecimals(1);
myChart.setAxisValuesColor('#9C1919');
myChart.setTextPaddingLeft(0);
myChart.setBarValuesColor('#9C1919');
myChart.setBarBorderWidth(0);
myChart.setTitleColor('#8C8382');
myChart.setGridColor('#5D5F5D');
myChart.draw();
*/

<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>