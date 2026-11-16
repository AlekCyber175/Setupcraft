export const POTENCIA_BASE = 60;

export const slots = [
  { id: 'gabinete', nome: 'Gabinete', icone: 'cube-outline' },
  { id: 'cpu', nome: 'Processador', icone: 'hardware-chip-outline' },
  { id: 'cooler', nome: 'Refrigeração', icone: 'snow-outline' },
  { id: 'ram', nome: 'Memória RAM', icone: 'layers-outline' },
  { id: 'gpu', nome: 'Placa de vídeo', icone: 'speedometer-outline' },
  { id: 'armazenamento', nome: 'Armazenamento', icone: 'server-outline' },
  { id: 'fonte', nome: 'Fonte', icone: 'flash-outline' },
  { id: 'iluminacao', nome: 'Iluminação', icone: 'color-palette-outline' },
];

export const partes = {
  gabinete: [
    { id: 'gabinete-compacto', nome: 'Gabinete compacto', descricao: 'Ocupa pouco espaço na mesa. Aceita placas de vídeo de até 250 mm.', maxGpu: 250, potencia: 0, silencio: 5 },
    { id: 'gabinete-medio', nome: 'Gabinete médio', descricao: 'Equilíbrio entre tamanho e ventilação. Aceita placas de até 320 mm.', maxGpu: 320, potencia: 0, silencio: 6 },
    { id: 'gabinete-torre', nome: 'Torre grande', descricao: 'Muito espaço e fluxo de ar. Aceita placas de até 400 mm.', maxGpu: 400, potencia: 0, silencio: 7 },
  ],
  cpu: [
    { id: 'cpu-4', nome: 'Processador 4 núcleos', descricao: 'Para tarefas leves e uso diário.', potencia: 65, jogos: 4, trabalho: 3, silencio: 8 },
    { id: 'cpu-6', nome: 'Processador 6 núcleos', descricao: 'Bom para estudar, programar e jogar.', potencia: 95, jogos: 6, trabalho: 6, silencio: 6 },
    { id: 'cpu-8', nome: 'Processador 8 núcleos', descricao: 'Muita força para jogos e várias tarefas ao mesmo tempo.', potencia: 125, jogos: 8, trabalho: 8, silencio: 4 },
    { id: 'cpu-12', nome: 'Processador 12 núcleos', descricao: 'Ideal para edição, compilação e trabalho pesado.', potencia: 170, jogos: 9, trabalho: 10, silencio: 3 },
  ],
  cooler: [
    { id: 'cooler-padrao', nome: 'Cooler padrão', descricao: 'Simples e barato, mas mais barulhento.', potencia: 5, jogos: 1, trabalho: 1, silencio: 3 },
    { id: 'cooler-torre', nome: 'Cooler torre', descricao: 'Boa troca de calor com ruído moderado.', potencia: 6, jogos: 2, trabalho: 2, silencio: 6 },
    { id: 'water-240', nome: 'Water cooler 240 mm', descricao: 'Refrigeração líquida, silenciosa e eficiente.', potencia: 12, jogos: 3, trabalho: 3, silencio: 7 },
    { id: 'water-360', nome: 'Water cooler 360 mm', descricao: 'Para processadores muito quentes, com o melhor silêncio.', potencia: 15, jogos: 4, trabalho: 4, silencio: 8 },
  ],
  ram: [
    { id: 'ram-8', nome: 'RAM 8 GB', descricao: 'Suficiente para tarefas básicas.', potencia: 5, modulos: 1, jogos: 2, trabalho: 1 },
    { id: 'ram-16', nome: 'RAM 16 GB', descricao: 'O mínimo confortável para jogos e estudo.', potencia: 5, modulos: 2, jogos: 4, trabalho: 4 },
    { id: 'ram-32', nome: 'RAM 32 GB', descricao: 'Folga para programar, editar e jogar.', potencia: 8, modulos: 4, jogos: 5, trabalho: 7 },
    { id: 'ram-64', nome: 'RAM 64 GB', descricao: 'Para máquinas virtuais e projetos grandes.', potencia: 10, modulos: 4, jogos: 5, trabalho: 10 },
  ],
  gpu: [
    { id: 'gpu-integrada', nome: 'Vídeo integrado', descricao: 'Usa o vídeo do processador, sem placa dedicada.', potencia: 0, comprimento: 0, jogos: 1, trabalho: 2, silencio: 10 },
    { id: 'gpu-media', nome: 'GPU intermediária 8 GB', descricao: 'Roda bem jogos em Full HD.', potencia: 150, comprimento: 240, jogos: 6, trabalho: 5, silencio: 6 },
    { id: 'gpu-alta', nome: 'GPU alta 12 GB', descricao: 'Jogos em 1440p com muitos quadros por segundo.', potencia: 220, comprimento: 300, jogos: 8, trabalho: 7, silencio: 4 },
    { id: 'gpu-topo', nome: 'GPU topo 16 GB', descricao: 'Desempenho máximo, mas grande e faminta de energia.', potencia: 320, comprimento: 340, jogos: 10, trabalho: 9, silencio: 2 },
  ],
  armazenamento: [
    { id: 'hd-1tb', nome: 'HD 1 TB', descricao: 'Muito espaço, mas lento e com ruído.', potencia: 8, jogos: 1, trabalho: 1, silencio: 4 },
    { id: 'ssd-sata-500', nome: 'SSD SATA 500 GB', descricao: 'Rápido e silencioso para o dia a dia.', potencia: 4, jogos: 3, trabalho: 3, silencio: 9 },
    { id: 'ssd-nvme-1tb', nome: 'SSD NVMe 1 TB', descricao: 'Carrega sistema e jogos muito rápido.', potencia: 7, jogos: 4, trabalho: 5, silencio: 9 },
    { id: 'ssd-nvme-2tb', nome: 'SSD NVMe 2 TB', descricao: 'Velocidade e espaço para projetos grandes.', potencia: 8, jogos: 5, trabalho: 7, silencio: 9 },
  ],
  fonte: [
    { id: 'fonte-450', nome: 'Fonte 450 W', descricao: 'Para montagens simples, sem placa de vídeo dedicada.', capacidade: 450, silencio: 5 },
    { id: 'fonte-650', nome: 'Fonte 650 W', descricao: 'Atende a maioria das montagens com placa intermediária.', capacidade: 650, silencio: 6 },
    { id: 'fonte-850', nome: 'Fonte 850 W', descricao: 'Folga para placas de vídeo mais fortes.', capacidade: 850, silencio: 7 },
    { id: 'fonte-1000', nome: 'Fonte 1000 W', descricao: 'Para configurações extremas.', capacidade: 1000, silencio: 8 },
  ],
  iluminacao: [
    { id: 'rgb-off', nome: 'Sem iluminação', descricao: 'Visual discreto, sem luzes.', cor: '#475569' },
    { id: 'rgb-roxo', nome: 'RGB roxo', descricao: 'Luz roxa, a cor da identidade do SetupCraft.', cor: '#8B5CF6' },
    { id: 'rgb-ciano', nome: 'RGB ciano', descricao: 'Luz azul-esverdeada, clima tecnológico.', cor: '#22D3EE' },
    { id: 'rgb-rosa', nome: 'RGB rosa', descricao: 'Luz rosa, vibrante e chamativa.', cor: '#F472B6' },
  ],
};

const montar = (gabinete, cpu, cooler, ram, gpu, armazenamento, fonte, iluminacao) => ({
  gabinete, cpu, cooler, ram, gpu, armazenamento, fonte, iluminacao,
});

export const montagensIniciais = {
  'neon-arena': montar('gabinete-torre', 'cpu-8', 'water-240', 'ram-32', 'gpu-alta', 'ssd-nvme-1tb', 'fonte-850', 'rgb-roxo'),
  'shadow-performance': montar('gabinete-medio', 'cpu-8', 'cooler-torre', 'ram-32', 'gpu-alta', 'ssd-nvme-1tb', 'fonte-850', 'rgb-off'),
  'clean-workspace': montar('gabinete-compacto', 'cpu-6', 'cooler-padrao', 'ram-16', 'gpu-integrada', 'ssd-sata-500', 'fonte-450', 'rgb-off'),
  'nordic-desk': montar('gabinete-compacto', 'cpu-4', 'cooler-padrao', 'ram-16', 'gpu-integrada', 'ssd-sata-500', 'fonte-450', 'rgb-off'),
  'focus-station': montar('gabinete-medio', 'cpu-6', 'cooler-torre', 'ram-32', 'gpu-media', 'ssd-nvme-1tb', 'fonte-650', 'rgb-off'),
  'remote-pro': montar('gabinete-compacto', 'cpu-6', 'cooler-torre', 'ram-32', 'gpu-integrada', 'ssd-nvme-1tb', 'fonte-450', 'rgb-off'),
  'dev-station': montar('gabinete-medio', 'cpu-8', 'water-240', 'ram-64', 'gpu-media', 'ssd-nvme-2tb', 'fonte-650', 'rgb-ciano'),
  'code-and-coffee': montar('gabinete-compacto', 'cpu-6', 'cooler-torre', 'ram-32', 'gpu-integrada', 'ssd-nvme-1tb', 'fonte-450', 'rgb-roxo'),
};

export const montagemPadrao = montagensIniciais['clean-workspace'];
