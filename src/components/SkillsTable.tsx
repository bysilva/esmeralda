import React from 'react'

interface Skill {
  technology: string
  level: 'Basico' | 'Intermedio' | 'Avanzado'
}

const skills: Skill[] = [
  { technology: 'Coordinación Logística', level: 'Avanzado' },
  { technology: 'Trucking Service / Transporte Terrestre', level: 'Avanzado' },
  { technology: 'Importación / Exportación (Impo-Expo)', level: 'Avanzado' },
  { technology: 'Gestión de Embarques', level: 'Avanzado' },
  { technology: 'Customer Service / Atención al Cliente', level: 'Avanzado' },
  { technology: 'Gestión de Documentación', level: 'Intermedio' },
  { technology: 'Excel', level: 'Intermedio' },
  { technology: 'Rastreo y Monitoreo de Carga', level: 'Avanzado' },
  { technology: 'Manejo de Incidencias y Retrasos', level: 'Intermedio' },
  { technology: 'Comunicación con Agentes Aduanales', level: 'Avanzado' },
  { technology: 'Reportes Operativos', level: 'Avanzado' },
  { technology: 'Inglés', level: 'Basico' },
  { technology: 'Cotizaciones y Tarifas de Flete', level: 'Intermedio' },
  {
    technology: 'Atención Multimodal (Marítimo, Aéreo y Terrestre)',
    level: 'Avanzado',
  },
  {
    technology: 'Plataformas de Tracking (INTTRA, Cargowise, etc.)',
    level: 'Intermedio',
  },
  {
    technology: 'Negociación con Proveedores de Transporte',
    level: 'Intermedio',
  },
  { technology: 'Planeación de Rutas de Entrega', level: 'Intermedio' },
]

const getColor = (level: Skill['level']) => {
  switch (level) {
    case 'Basico':
      return 'bg-blue-500'
    case 'Intermedio':
      return 'bg-yellow-500'
    case 'Avanzado':
      return 'bg-green-500'
    default:
      return 'bg-gray-400'
  }
}

const SkillsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-white shadow-md dark:bg-zinc-900">
        <thead>
          <tr className="bg-gray-100 dark:bg-zinc-800">
            <th className="px-3 py-3 text-left font-semibold text-gray-700 dark:text-zinc-200">
              Habilidad
            </th>
            <th className="px-3 py-3 text-left font-semibold text-gray-700 dark:text-zinc-200">
              Nivel
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr
              key={skill.technology}
              className="border-b border-gray-200 dark:border-zinc-700"
            >
              <td className="px-3 py-3 text-zinc-800 dark:text-zinc-100">
                {skill.technology}
              </td>
              <td className="px-3 py-3">
                <span
                  className={`inline-block w-24 rounded-full px-3 py-1 text-center text-sm font-semibold text-white ${getColor(
                    skill.level,
                  )}`}
                >
                  {skill.level}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkillsTable
