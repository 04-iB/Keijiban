'use strict'
{
    const rank=document.getElementById('rank');
    const rankInner=document.getElementById('rank_inner');
    const news=document.getElementById('new');
    const newsInner=document.getElementById('new_inner');

    rank.addEventListener('click', () => {
        if(newsInner.classList.contains('show')){
　　    //　containsメソッドで、test2クラスが既に付与されているか判定 
            newsInner.classList.remove('show');
            newsInner.classList.add('disappear');
            rankInner.classList.remove('disappear');
            rankInner.classList.add('show');
        }
    });
    
    news.addEventListener('click', () => {
        if(rankInner.classList.contains('show')){
　　    //　containsメソッドで、test2クラスが既に付与されているか判定 
            rankInner.classList.remove('show');
            rankInner.classList.add('disappear');
            newsInner.classList.remove('disappear');
            newsInner.classList.add('show');
        }
    });
}