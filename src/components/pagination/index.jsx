import { memo, useEffect } from "react"; 
import { Direction,Symbol } from '@/components/icons' 
import { usePagination, useMemoizedFn} from '@/common/hooks' 
import Button from '@/components/button'
import './index.css' 
 

export default memo((props)=>{
    const pagination = usePagination({ total: props.total })

    const onChange = useMemoizedFn((type, item)=>{
        let value
        switch(type){
            case 0 : value = pagination.page(item);
                break;
            case -1: value = pagination.prev();
                break;
            case 1 : value = pagination.next();
                break;
        }
        props?.onChange?.(value);
    });

    useEffect(()=>{
        if(props.page && props.page !== pagination.active){
            pagination.page(Number(props.page))
        }
    },[props.page])

    return (
        <div className="pagination-group" data-disabled={props.disabled} onClick={e=> e?.stopPropagation()}> 
            <Button bordered={props.bordered} disabled={pagination.active <= 1} onClick={onChange.bind(null,-1)}>
                <Direction left strokeWidth="3" color='#000' thems="#fff" />
            </Button>
            <span className="page-item">
                {
                    pagination?.range?.map((item, index)=>{
                        if(item === 'dots'){
                            return (
                                <div key={'dot'+index} className="pagination-dots">
                                    <Symbol more  thems="#000" color="#000" />
                                </div>
                            ) 
                        }
                        return (
                            <Button 
                                key={'page'+item} 
                                bordered={props.bordered} 
                                className={pagination.active === item && 'active'}  
                                onClick={onChange.bind(null,0, item)}
                            >
                                <span> {item} </span>
                            </Button>
                        )
                    })
                } 
            </span>

            <span className="page-item small">
                {
                    props.total > 3 &&
                    pagination.active === props.total && (
                        <Button bordered={props.bordered} onClick={onChange.bind(null,0, pagination.active - 2)}>
                            <span> {pagination.active - 2}</span>
                        </Button>
                    )
                }
                {
                    pagination.active > 1 && (
                        <Button bordered={props.bordered} onClick={onChange.bind(null,0, pagination.active - 1)}>
                            <span> {pagination.active - 1}</span>
                        </Button>
                    )
                }
                <Button bordered={props.bordered} className={'active'}>
                    <span> {pagination.active}</span>
                </Button>
                {
                    props.total > 3 &&
                    pagination.active < props.total && (
                        <Button bordered={props.bordered} onClick={onChange.bind(null,0, pagination.active + 1)}>
                            <span> {pagination.active + 1}</span>
                        </Button>
                    )
                }
                 {
                    pagination.active === 1 && (
                        <Button bordered={props.bordered} onClick={onChange.bind(null,0, pagination.active + 2)}>
                            <span> {pagination.active + 2}</span>
                        </Button>
                    )
                }
            </span>
          
            <Button bordered={props.bordered} disabled={pagination.active === props.total} onClick={onChange.bind(null,1)}>
                <Direction right strokeWidth="3" color ='#000'  />
            </Button>
        </div>
    )
})