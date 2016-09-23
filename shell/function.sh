function clearRedis {
    STAGE='app/etc/local.stage.xml'
    PROD='app/etc/local.prod.xml'
    ARRAY=($STAGE $PROD)
    ELEMENTS=${#ARRAY[@]}
    COUNT=0
    for (( i=1;i<=$ELEMENTS;i++)); do
        if [ -e ${ARRAY[${i}]} ]; then
            rm ${ARRAY[${i}]}
        else
            let COUNT=COUNT+1
        fi
    done 
    if [ $COUNT -eq 0 ]; then
        echo "Redis cleared"
    elif [ $COUNT -eq 2 ]; then
        echo "Redis files empty"
    fi
}

function mg() {
    if echo $1 | egrep -q '^[0-9]+$'; then
        git checkout MG-$1
    else
        git checkout $1
    fi         
}