import { getCSS, tickConfig, criarGrafico } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['MA','AM','AL','PA','PI','SE','AC','AP','PE','PB','CE','BA','RR','RN','TO','RO','ES','RJ','MG','GO','MS','MT','PR','SP','DF','RS','SC']
    const quantidadeDeUsuarios = ['52,2','47,4','47,2','44,3','43,4','43,1','42,9','42,3','41,8','41,7','41,3','40,4','38,9','37,9','32,7','23,1','19,1','18,8','18,6','17,3','15,1','14,9','13,8','13,1','11,2','11,1','7,5']

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Percentual de pessoas em situação de pobreza por estados, de acordo com os parâmetros do Banco Mundial,  por UF(%)',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Estados',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Porcentagem',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }

    }

    criarGrafico(data, layout)
}

quantidadeUsuariosPorRede()