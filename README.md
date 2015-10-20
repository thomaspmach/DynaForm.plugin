# DynaForm.plugin
A javascript plugin that creates forms with a JSON parameter

How to use:

   DynaForm is simple to use, you only need to attach it in a div, put a JSON parameter and it does the magic! More details of how to attach in the example.html file.
  
  A example of the JSON input:
  
  { 'url':'#', 
    'token':'62bb61431348e22850828a5829c4373faafe29c1', 
    'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
    'fields': { 'estado':['PR','SC','SP','RS'], 
                'nível':['Iniciante','Intermediário','Avançado','Ninja']
              } 
  };
  
  
  
  The three first attributes in the Json are required, "url" is the url that will be send the ajax post, "token" and "secret" are about the autentication intelligence of the service. The object "fields" is where you configure your form, but first you need to know that form creates two text inputs called "Nome" and "Email" by default. If you want only the inputs "Nome" and "Email" the only thing that you need to do is let the object "fields" empty, like this:
  
  { 'url':'#', 
    'token':'62bb61431348e22850828a5829c4373faafe29c1', 
    'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
    'fields': {} 
  };
  
  
   
  To creat a text input, is simple, only put a empty array in the object "fields", like this:
  
  options = { 'url':'#', 
              'token':'62bb61431348e22850828a5829c4373faafe29c1', 
              'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
              'fields': { 'test':[] } 
            };
    
  The name of the array will be in the left of the form, this image show this: http://imgur.com/BPHlbkG
  
  
  
  You can put a lot of text inputs in the form, configure like you want! The JSON below creates the form in this image: http://imgur.com/j70At9b
  
  options = { 'url':'#', 
              'token':'62bb61431348e22850828a5829c4373faafe29c1', 
              'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
              'fields': { 'test':[], 'text2':[], 'test3':[], 'test4':[] } };
            };
  
  
  
  To create a select input put a array with more than one element in the object "fields", the values in the array will be the options of the selector, the JSON below shows this. The result form of this JSON is in this image: http://imgur.com/D1qeOJr
  
  options = { 'url':'#', 
              'token':'62bb61431348e22850828a5829c4373faafe29c1', 
              'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
              'fields': { 'hadouken':['A', 'B', 'C', 'D']} 
            };
  
  
  
  You can mix the text and the selector inputs, like in the JSON below, and make a big form! Image: http://imgur.com/q8iKhXK
  
  options = { 'url':'#', 
  	      'token':'62bb61431348e22850828a5829c4373faafe29c1', 
  	      'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
  	      'fields': { 'hadouken':['A', 'B', 'C', 'D'], 
  	      		  'abc':['xxxxx','yyyy','zzzz'], 
  	      		  'test1':[], 'test2':[]
  	      		} 
  	    };
  
  
  
  
  
  
	       
