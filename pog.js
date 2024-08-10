function pog(ty,p,z=4){tn=(document.getElementById(ty+'T').value||0)/p;ps=z>1?Math.round((tn)*z)/z:(tn);document.getElementById(ty+'P').textContent=ps.toFixed(z>1?2:1);}
