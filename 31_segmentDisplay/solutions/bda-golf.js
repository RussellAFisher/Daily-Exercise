n=[[' _ ','| |','|_|'],['   ','  |','  |'],[' _ ',' _|','|_ '],[' _ ',' _|',' _|'],['   ','|_|','  |'],[' _ ','|_ ',' _|'],[' _ ','|_ ','|_|'],[' _ ','  |','  |'],[' _ ','|_|','|_|'],[' _ ','|_|',' _|']]
sevenSegment=s=>[0,1,2].map(l=>[].reduce.call(String(s),(c,d)=>c+n[d][l]+' ','')).join('\n')
