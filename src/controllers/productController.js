app.controller('ProductCtrl', ($scope, prodcutFactory) => {
   
    String.prototype.hashCode = function() {
        var hash = 0, i, chr, len;
        if (this.length === 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
          chr   = this.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
      };
    
    if(!Object.keys) Object.keys = function(o){
    if (o !== Object(o))
            throw new TypeError('Object.keys called on non-object');
    var ret=[],p;
    for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
    return ret;
    }
    prodcutFactory.getAlotOfCategories(( data ) =>{
        
        $scope.categories = data.children
    
    })
    
  
    $scope.amount = 10
    $scope.products=[]
    
   let initProducts = ()=> {
    
    prodcutFactory.getAlotOfCategories(( data ) => { 
    let products = []
    let categories = data.children
    
    for(let i =0; i<categories.length; i++){
        
            
        
        products.push({category:categories[i].name, categoryId:categories[i].id, children:categories[i].children.slice(0,$scope.amount) })
        
    }

    
    let finalProducts =  []
    
    for(let i=0; i<products.length; i++){
        
        for(let j= 0; j<products[i].children.length; j++) {
            
            window.getRandomProduct(products[i].children[j].id,(product)=>{
                
                product.category = products[i].category
                product.categoryId = products[i].categoryId;
                product.extra['AGA']['LGA'] = Number(product.extra['AGA']['LGA'])
                product.extra['AGA']['VOL'] = Number(product.extra['AGA']['VOL'])
                finalProducts.push(product)
                
            })
        }
    }
    $scope.products = finalProducts
    
    })
   }
    initProducts()
    
 
   
  
    $scope.filterOnQuantity = (quantity)=>{
        $scope.filter1 =(field1, field2)=>{
            if(field1.extra['AGA']['LGA']<=quantity && field1.extra['AGA']['LGA']>0){

                return field1
            }
           
        }
       
    }

    $scope.filterOnVolym = (volym)=>{
        $scope.filter2 =(field1, field2)=>{
            console.log(field1)
            if(field1.extra['AGA']['VOL']<=volym && field1.extra['AGA']['VOL']>0){

                return field1
            }
           
        }
       
    }

   
    $scope.loadMoreProducts = () =>{ 
        $scope.amount+=10
        if($scope.amoun>100000){
            $scope.amount=100000
        }
        initProducts()
    }

    
    
    
});
