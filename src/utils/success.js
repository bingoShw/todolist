//横向胜利
function crosswiseSuccess(checkerboard,row,col) {
    //获取的下棋是黑还是白
    const value = checkerboard[row][col];
    //表示刚刚下的棋子
    let num = 1;
    //判断它的左侧是否有和它相连成五个的
    for(let i = col - 1;i >= 0;i--){
        if(checkerboard[row][i] === value){
            num += 1;
        }else {
            break
        }
    }
    //判断它的右侧是否有和它相连成五个的
    for(let i = col + 1;i <= 14;i++){
        if (checkerboard[row][i] === value){
            num += 1;
        } else {
            break
        }
    }
    return num >= 5;
}

//纵向胜利
function longitudinalSuccess(checkerboard,row,col) {
    const value = checkerboard[row][col];
    let num = 1;
    //判断它的上方是否有和它相连成五个的
    for (let i = row - 1;i >= 0;i--){
        if (checkerboard[i][col] === value){
            num += 1
        } else {
            break
        }
    }
    //判断它的下方是否有和它相连成五个的
    for (let i = row + 1;i <= 15;i++){
        if (checkerboard[i][col] === value){
            num += 1
        } else {
            break
        }
    }
    return num >= 5;
}

//左对角线胜利
function leftDiagonalSuccess(checkerboard,row,col) {
    const value = checkerboard[row][col];
    let num = 1;
    //左上
    for(let i = 1;row - i >= 0 && col - i >= 0;i++){
        if (checkerboard[row - i][col - i] === value){
            num += 1
        } else {
            break
        }
    }
    //右下
    for(let i = 1;row + i <= 14 && col + i <= 14;i--){
        if (checkerboard[row + i][col + i] === value){
            num += 1
        } else {
            break
        }
    }
    return num >= 5;
}

//右对角线胜利
function rightDiagonalSuccess(checkerboard,row,col) {
    const value = checkerboard[row][col];
    let num = 1;
    //右上
    for(let i = 1;row + i <= 14 && col - i >= 0;i++){
        if (checkerboard[row - i][col - i] === value){
            num += 1
        } else {
            break
        }
    }
    //左下
    for(let i = 1;row - i >= 0 && col + i <= 14;i--){
        if (checkerboard[row + i][col + i] === value){
            num += 1
        } else {
            break
        }
    }
    return num >= 5;
}

export default function isSuccess(checkerboard,row,col) {
    return crosswiseSuccess(checkerboard,row,col) || longitudinalSuccess(checkerboard,row,col)
        || leftDiagonalSuccess(checkerboard,row,col) || rightDiagonalSuccess(checkerboard,row,col)
}